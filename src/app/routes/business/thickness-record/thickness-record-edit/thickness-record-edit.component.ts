import { Component, Inject, OnInit } from '@angular/core';
import { EditComponent } from '../../../common/component/edit-component';
import { SFSelectWidgetSchema } from '@delon/form';
import { InstrumentRecordService } from '../../../../service/instrument-record/instrument-record.service';
import { ProjectService } from '../../../../service/project/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { ThicknessRecordService } from '../../../../service/thickness-record/thickness-record.service';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';

@Component({
  selector: 'app-thickness-record-edit',
  templateUrl: './thickness-record-edit.component.html',
  styles: [
  ]
})
export class ThicknessRecordEditComponent  extends EditComponent implements OnInit {
  detailPropertys = new Set(['projectUuid', 'thicknessSectionPositionRecordUuid', 'thickness', 'paint', 'rust']);
  schema = {
    properties: {
      deviceRecordUuid: {
        type: 'string',
        enum: [
          { label: '请选择样机名称-编码', value: '' },
        ],
        default: '',
        ui: {
          i18n: 'deviceRecord.name',
          widget: 'select',
        } as SFSelectWidgetSchema,
      },
      thickness: { type: 'string', ui: { i18n: 'thicknessRecord.thickness' }, maxLength: 50 },
      paint: { type: 'string', ui: { i18n: 'thicknessRecord.paint' }, maxLength: 50 },
      rust: { type: 'string', ui: { i18n: 'thicknessRecord.rust' }, maxLength: 50 },
    },
    required: ['projectUuid'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 12 },
    },
  };
  initFinish = false;
  constructor(public thicknessRecordService: ThicknessRecordService, public deviceRecordService: DeviceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(thicknessRecordService, modal, msg, router, i18NService, activatedRoute);
    deviceRecordService.listAll().subscribe(v => {
      this.initFinish = true;
      this.commonService.responseWrapperProcess(v, (successData: any[]) => {
        this.deviceRecordProcess(successData, null);
      }, (failData) => {
        this.deviceRecordProcess(null, failData);
      });
    });
  }
  deviceRecordProcess(successData, failureData) {
    const projects = [{ label: '请选择样机名称-编码', value: '' }];
    successData.forEach(p => {
      projects.push({ label:p['name'] + '-' + p['code'], value: p['uuid'] });
    });
    this.schema.properties.deviceRecordUuid['enum'] = projects;
  }
  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.thicknessRecordService.listPropertys];
    super.ngOnInit();
  }

}
