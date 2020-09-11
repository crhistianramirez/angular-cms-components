import './storybook-base-configuration';
import { moduleMetadata } from '@storybook/angular';
import { CmsAdminModule } from '../public-api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssetInputComponent } from '../admin/components/asset-input/asset-input.component';

export default {
  title: 'Admin/Asset Input',
  component: AssetInputComponent,
  parameters: {
    component: AssetInputComponent,
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BrowserModule, BrowserAnimationsModule, CmsAdminModule],
    }),
  ],
};

export const SingleAsset = () => ({
  component: AssetInputComponent,
  template: `<div class="p-5">
    <cms-asset-input [(selected)]="selected" [tagOptions]="tagOptions" [defaultListOptions]="defaultListOptions"></cms-asset-input>
  </div>`,
  props: {
    defaultListOptions: {
      filters: {
        Active: false,
      },
    },
    selected: undefined,
    tagOptions: [
      'Blog',
      'Promotion',
      'People',
      'Instruments',
      'Backgrounds',
      'Icons',
      'Graphics',
    ],
  },
});
export const MultipleAssets = () => ({
  component: AssetInputComponent,
  template: `<div class="p-5">
  <cms-asset-input [(selected)]="selected" [multiple]="true" [tagOptions]="tagOptions"></cms-asset-input>
  </div>`,
  props: {
    selected: undefined,
    tagOptions: [
      'Blog',
      'Promotion',
      'People',
      'Instruments',
      'Backgrounds',
      'Icons',
      'Graphics',
    ],
  },
});