import type { Struct, Schema } from '@strapi/strapi';

export interface ComponentsSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_section_headers';
  info: {
    displayName: 'section_header';
    icon: 'bold';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface ComponentsAboutPageCards extends Struct.ComponentSchema {
  collectionName: 'components_components_about_page_cards';
  info: {
    displayName: 'about_page_card';
    icon: 'book';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    linkedin_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.section-header': ComponentsSectionHeader;
      'components.header-title-line-1': ComponentsHeaderTitleLine1;
      'components.about-page-cards': ComponentsAboutPageCards;
    }
  }
}
