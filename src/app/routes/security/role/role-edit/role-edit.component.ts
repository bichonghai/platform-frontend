import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../service/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzFormatEmitEvent, NzMessageService, NzModalService, NzTreeComponent, NzTreeNode } from 'ng-zorro-antd';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { EditComponent } from '../../../common/component/edit-component';
import { RoleService } from '../../../../service/role/role.service';
import { PermissionService } from '../../../../service/permission/permission.service';
import { Observable, of, zip } from 'rxjs';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styles: [],
})
export class RoleEditComponent extends EditComponent implements OnInit {
  schema = {
    properties: {
      roleName: { type: 'string', ui: { i18n: 'role.roleName' }, maxLength: 50 },
      description: { type: 'string', ui: { i18n: 'role.description' }, maxLength: 50 },
      permissions: {
        type: 'string',
        ui: {
          i18n: 'role.permissions',
          widget: 'custom',
        },
      },
    },
    required: ['roleName', 'description'],
    ui: {
      spanLabelFixed: 150,
      disabled: true,
      grid: { span: 24 },
    },
  };
  nodes = [];
  defaultCheckedKeys = [];
  defaultSelectedKeys = [];
  defaultExpandedKeys = [];
  rolePermissionsMap = new Map();
  roleAllPermissionsMap = new Map();
  nodesMap = new Map();
  @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent!: NzTreeComponent;

  constructor(public roleService: RoleService, public permissionService: PermissionService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(roleService, modal, msg, router, i18NService, activatedRoute);
  }

  submit(event) {
    let nzTreeNode: NzTreeNode[] = this.nzTreeComponent.getCheckedNodeList();
    this.nzTreeComponent.getHalfCheckedNodeList().forEach(v => {
      nzTreeNode.push(v);
    });
    nzTreeNode = this.conductCheck(nzTreeNode);

    const permissionToDb = [];
    this.treeToModel(nzTreeNode, permissionToDb);
    event.permissions = permissionToDb;
    super.submit(event);
  }

  conductCheck(nzTreeNode: NzTreeNode[]): NzTreeNode[] {
    const checkedNodeList = [];
    const loop = (node: NzTreeNode) => {
      if (node.isChecked) {
        checkedNodeList.push(node);
        node.getChildren().forEach(child => {
          loop(child);
        });
      }
      if (node.isHalfChecked) {
        checkedNodeList.push(node);
      }
    };
    nzTreeNode.forEach(node => {
      loop(node);
    });
    return checkedNodeList;
  }

  private treeToModel(nzTreeNode: NzTreeNode[], permissionToDb: any[]) {
    if (nzTreeNode && permissionToDb) {
      nzTreeNode.forEach((v: any) => {
        permissionToDb.push(this.roleAllPermissionsMap.get(v.key));
      });
    }


  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', 'roleName', 'description'];
    let permissions: [] = [];
    let observableDetail: Observable<any>;
    if (this.uuid && this.uuid.length > 0) {
      observableDetail = this.commonService.detail(this.uuid);
    } else {
      observableDetail = of({ code: 200, data: {} });
    }
    zip(observableDetail, this.permissionService.listAll()).subscribe(([rolePermissions, allPermissions]) => {
      if (this.uuid && this.uuid.length > 0) {
        this.commonService.responseWrapperProcess(rolePermissions, (successData) => {
          this.listPropertys.forEach(v => {
            this.model[v] = successData[v];
          });
          permissions = successData['permissions'];
          const uuids = [];
          permissions.forEach(p => {
            uuids.push(p['uuid']);
            this.rolePermissionsMap.set(p['uuid'], p);
          });
        }, (failData) => {
          this.msg.error('获取信息失败');
        });

      }
      this.commonService.responseWrapperProcess(allPermissions, (successData) => {
        const nodeDbs = [];
        successData.forEach((v2: any) => {
          this.roleAllPermissionsMap.set(v2['uuid'], v2);
          const node = {};
          if (v2['levels'] === 1) {
            node['key'] = v2['uuid'];
            node['title'] = v2['name'];
            node['parentCode'] = v2['parentCode'];
            node['code'] = v2['code'];
            node['children'] = [];
            node['expanded'] = true;
            node['isLeaf'] = true;
            this.nodesMap.set(node['key'], node);
            this.getChildren(successData, node);
            nodeDbs.push(node);
          }
        });
        this.nodes = nodeDbs;
        this.rolePermissionsMap.forEach((value) => {
          // value和key就是map的key，value，map是map本身
          const node = this.nodesMap.get(value['uuid']);
          if (node) {
            if (this.isChildrenCheck(node)) {
              this.defaultCheckedKeys.push(node['key']);
            }
          }
        });
        this.sf.refreshSchema();
      }, (failureData) => {
        this.commonService.formErrorProcess(failureData, this.sf);
      });
    });
  }

  private isChildrenCheck(node: any) {
    let isCheck = true;
    if (!this.rolePermissionsMap.get(node['key'])) { // 当前节点没选中
      isCheck = false;
    } else {
      const childrens: [] = node['children'];
      if (childrens) {
        childrens.forEach(value => {
          if (!this.isChildrenCheck(value)) { // 判断子节点的子节点是否有未选中
            isCheck = false;
          }
        });
      }
    }
    return isCheck;

  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  private getChildren(successData: [], curNode) {
    successData.forEach((v2: any) => {
      if (v2.parentCode === curNode['code']) {
        const node = {};
        node['key'] = v2['uuid'];
        node['title'] = v2['name'];
        node['parentCode'] = v2['parentCode'];
        node['code'] = v2['code'];
        node['children'] = [];
        node['isLeaf'] = true;
        if (v2['levels'] <= 2) {
          node['expanded'] = true;
        }
        curNode['children'].push(node);
        curNode['isLeaf'] = false;
        this.nodesMap.set(node['key'], node);
        this.getChildren(successData, node);
      }
    });

  }
}
