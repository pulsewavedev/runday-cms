import type { Struct, Schema } from '@strapi/strapi';

export interface ComponentsHeaderTitleLine1 extends Struct.ComponentSchema {
  collectionName: 'components_components_header_title_line_1s';
  info: {
    displayName: 'home_page_header';
    icon: 'bold';
    description: '';
  };
  attributes: {
    header_title_line_2: Schema.Attribute.String & Schema.Attribute.Required;
    header_description: Schema.Attribute.Text & Schema.Attribute.Required;
    header_input_button_text: Schema.Attribute.String &
      Schema.Attribute.Required;
    header_title_line_1: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.header-title-line-1': ComponentsHeaderTitleLine1;
    }
  }
}
