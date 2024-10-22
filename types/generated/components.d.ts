import type { Struct, Schema } from '@strapi/strapi';

export interface ComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'title';
    icon: 'bold';
  };
  attributes: {};
}

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

export interface ComponentsLogoWall extends Struct.ComponentSchema {
  collectionName: 'components_components_logo_walls';
  info: {
    displayName: 'logo_wall';
  };
  attributes: {
    title: Schema.Attribute.Component<'components.title', false>;
    logos: Schema.Attribute.Component<'components.logo-wall-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentsLogoWallItem extends Struct.ComponentSchema {
  collectionName: 'components_components_logo_wall_items';
  info: {
    displayName: 'logo_wall_item';
    icon: 'file';
  };
  attributes: {
    image_url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
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
    header_try_now_title: Schema.Attribute.String;
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
      'components.title': ComponentsTitle;
      'components.section-header': ComponentsSectionHeader;
      'components.logo-wall': ComponentsLogoWall;
      'components.logo-wall-item': ComponentsLogoWallItem;
      'components.header-title-line-1': ComponentsHeaderTitleLine1;
      'components.about-page-cards': ComponentsAboutPageCards;
    }
  }
}
