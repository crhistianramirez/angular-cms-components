import './storybook-base-configuration';
import { moduleMetadata } from '@storybook/angular';
import { CmsAdminModule, PageEditorComponent } from '../public-api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import piasSectionTemplates from './mock/pias-section-templates.constants';
import seSectionTemplates from './mock/se-section-templates.constants';

export default {
  title: 'Admin/Page Editor',
  component: PageEditorComponent,
  parameters: {
    component: PageEditorComponent,
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BrowserModule, BrowserAnimationsModule, CmsAdminModule],
    }),
  ],
};

export const NewPageExample = () => ({
  component: PageEditorComponent,
  props: {
    document: {
      ID: '',
      Doc: {
        Title: '',
        Url: '',
        Description: '',
        HeaderEmbeds: '',
        Content: ``,
        FooterEmbeds: '',
        Active: false,
        NavigationTitle: '',
      },
    },
    resourceType: 'Suppliers',
    resourceID: '41106',
    editorOptions: {
      ordercloud: {
        get_section_templates_callback: () =>
          Promise.resolve(seSectionTemplates),
      },
      content_css: [
        'https://sestorageprod.azureedge.net/buyerweb/styles.aa93dfa7591525f15e8b.css',
        // 'https://piasstorageprod.azureedge.net/buyerweb/styles.07d24b25eb6a60350a70.css',
        // 'https://mgrstoragetest.azureedge.net/buyerweb/styles.e94215343d3493186ae1.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css',
      ],
    },
  },
});

export const EditPageExample = () => ({
  component: PageEditorComponent,
  props: {
    document: {
      ID: '4ad8bd98-3fe8-4caa-9402-0c8f2769d156',
      $schema:
        'https://marketplace-middleware-test.azurewebsites.net/schema-specs/5539d88d-2787-476c-9b61-cdadd181f12d',
      Doc: {
        Title: 'Locations',
        Url: 'locations',
        SiteUrl: 'https://www.my-awesome-website.com',
        Description: '',
        MetaImageUrl: '',
        HeaderEmbeds: 'console.log(\'logged from header\');',
        Content:
          '<h1>&nbsp;</h1>\n<h1><span style="color: #f1c40f;">LOCATIONS</span></h1>\n<div data-oc-widget="oc-section" data-oc-start-date="2020-08-12" data-oc-end-date="2020-08-13">\n<div class="container">\n<div class="row align-items-center">\n<div class="col-xs-12 col-sm-12 col-md-6">\n<h4>Show row on: 08/12 to 08/13</h4>\n<p>Cras consequat faucibus purus, nec viverra elit molestie dictum. Nunc at tempor purus.</p>\n<a class="btn btn-primary" href="#">Start Now</a> <a class="btn btn-secondary" href="#">Read More</a></div>\n<div class="col-xs-12 col-sm-12 col-md-6">\n<figure style="max-width: 100%;"><img style="max-width: 100%;" src="https://via.placeholder.com/600x250.png" /></figure>\n</div>\n</div>\n</div>\n</div>\n<p>&nbsp;</p>\n<div data-oc-widget="oc-section" data-oc-start-date="2020-07-27" data-oc-end-date="2020-08-07">\n<div class="jumbotron border-0">\n<div class="container text-center">\n<h1>Show on: 07/27 to 08/07&nbsp;</h1>\n<p>Donec fermentum magna at ex pulvinar, sit amet viverra ex suscipit. Integer fringilla mauris vitae eleifend dictum.</p>\n<a class="btn btn-primary" href="#">Start Now</a> <a class="btn btn-link" href="#">Read More</a></div>\n</div>\n</div>',
        FooterEmbeds: 'console.log(\'logged from footer\');',
        Active: true,
        NavigationTitle: 'Locations',
        Author: 'Crhistian Ramirez',
        DateCreated: '2020-07-29T02:28:01.114Z',
        LastUpdatedBy: 'Robert Watt',
        DateLastUpdated: '2020-07-30T21:48:54.957Z',
      },
    },
    resourceType: 'Suppliers',
    resourceID: '41106',
    editorOptions: {
      content_css: [
        // 'https://piasstorageprod.azureedge.net/buyerweb/styles.07d24b25eb6a60350a70.css',
        'https://mgrstoragetest.azureedge.net/buyerweb/styles.e94215343d3493186ae1.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css',
      ],
    },
  },
});

export const WithImages = () => ({
  component: PageEditorComponent,
  props: {
    document: {
      ID: '4ad8bd98-3fe8-4caa-9402-0c8f2769d156',
      $schema:
        'https://marketplace-middleware-test.azurewebsites.net/schema-specs/5539d88d-2787-476c-9b61-cdadd181f12d',
      Doc: {
        Title: 'Locations',
        Url: 'locations',
        SiteUrl: 'https://www.my-awesome-website.com',
        Description: '',
        MetaImageUrl: '',
        HeaderEmbeds: 'console.log(\'logged from header\');',
        Content:
        "<p><img src=\"https://marktplacetest.blob.core.windows.net/assets-02aef4ce-2582-4417-bba4-41caec231527/de8fd7b4-7fa6-4070-9b8d-723bd5116944\" alt=\"products_greenfield.png\" width=\"1268\" height=\"746\" /></p>",
        FooterEmbeds: 'console.log(\'logged from footer\');',
        Active: true,
        NavigationTitle: 'Locations',
        Author: 'Crhistian Ramirez',
        DateCreated: '2020-07-29T02:28:01.114Z',
        LastUpdatedBy: 'Robert Watt',
        DateLastUpdated: '2020-07-30T21:48:54.957Z',
      },
    },
    resourceType: 'Suppliers',
    resourceID: '41106',
    editorOptions: {
      content_css: [
        // 'https://piasstorageprod.azureedge.net/buyerweb/styles.07d24b25eb6a60350a70.css',
        'https://piasstoragetest.azureedge.net/buyerweb/styles.9583bf217aedd7b22e76.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css',
      ],
    },
  },
});

export const DeletePageExample = () => ({
  component: PageEditorComponent,
  props: {
    document: {
      ID: '4ad8bd98-3fe8-4caa-9402-0c8f2769d156',
      $schema:
        'https://marketplace-middleware-test.azurewebsites.net/schema-specs/5539d88d-2787-476c-9b61-cdadd181f12d',
      Doc: {
        Title: 'Locations',
        Url: 'locations',
        SiteUrl: 'https://www.my-awesome-website.com',
        Description: '',
        MetaImageUrl: '',
        HeaderEmbeds: 'console.log(\'logged from header\');',
        Content:
          '<h1>&nbsp;</h1>\n<h1><span style="color: #f1c40f;">LOCATIONS</span></h1>\n<div data-oc-widget="oc-section" data-oc-start-date="2020-08-12" data-oc-end-date="2020-08-13">\n<div class="container">\n<div class="row align-items-center">\n<div class="col-xs-12 col-sm-12 col-md-6">\n<h4>Show row on: 08/12 to 08/13</h4>\n<p>Cras consequat faucibus purus, nec viverra elit molestie dictum. Nunc at tempor purus.</p>\n<a class="btn btn-primary" href="#">Start Now</a> <a class="btn btn-secondary" href="#">Read More</a></div>\n<div class="col-xs-12 col-sm-12 col-md-6">\n<figure style="max-width: 100%;"><img style="max-width: 100%;" src="https://via.placeholder.com/600x250.png" /></figure>\n</div>\n</div>\n</div>\n</div>\n<p>&nbsp;</p>\n<div data-oc-widget="oc-section" data-oc-start-date="2020-07-27" data-oc-end-date="2020-08-07">\n<div class="jumbotron border-0">\n<div class="container text-center">\n<h1>Show on: 07/27 to 08/07&nbsp;</h1>\n<p>Donec fermentum magna at ex pulvinar, sit amet viverra ex suscipit. Integer fringilla mauris vitae eleifend dictum.</p>\n<a class="btn btn-primary" href="#">Start Now</a> <a class="btn btn-link" href="#">Read More</a></div>\n</div>\n</div>',
        FooterEmbeds: 'console.log(\'logged from footer\');',
        Active: false,
        NavigationTitle: 'Locations',
        Author: 'Crhistian Ramirez',
        DateCreated: '2020-07-29T02:28:01.114Z',
        LastUpdatedBy: 'Crhistian Ramirez',
        DateLastUpdated: '2020-07-29T02:28:01.114Z',
      },
    },
    resourceType: 'Suppliers',
    resourceID: '41106',
    editorOptions: {
      content_css: [
        // 'https://piasstorageprod.azureedge.net/buyerweb/styles.07d24b25eb6a60350a70.css',
        'https://mgrstoragetest.azureedge.net/buyerweb/styles.e94215343d3493186ae1.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css',
      ],
    },
  },
});

export const NoInputs = () => ({
  component: PageEditorComponent,
  props: {
    renderSiteUrl: 'https://marketplace-buyer-ui-test.azurewebsites.net/',
    resourceType: 'ApiClients',
    resourceID: '41106',
    document: {
      ID: 'PjcKdK2dKECNcX8ond9g2A',
      Doc: {
        Title: 'Aug 14, 10:47am',
        Url: 'aug-14-10-47am',
        Description: '',
        MetaImageUrl: '',
        DateCreated: '2020-08-14T15:48:04.04Z',
        Author: 'DJ Steinmetz',
        DateLastUpdated: '2020-08-14T15:48:04.04Z',
        LastUpdatedBy: 'DJ Steinmetz',
        HeaderEmbeds: '',
        Content: '',
        FooterEmbeds: '',
        Active: false,
        NavigationTitle: '',
      },
      SchemaSpecUrl:
        'https://marketplace-middleware-test.azurewebsites.net/schema-specs/55c72ad7-e65c-4957-b545-0ba187188af8',
      History: {
        DateCreated: '2020-08-14T15:48:04.0239642+00:00',
        CreatedByUserID: 'v0jyyQfRxkmE5ZKS1qAegQ',
        DateUpdated: '2020-08-14T15:48:04.0239732+00:00',
        UpdatedByUserID: 'v0jyyQfRxkmE5ZKS1qAegQ',
      },
    },
  },
});
