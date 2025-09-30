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

export interface ComponentsReviewsSection extends Struct.ComponentSchema {
  collectionName: 'components_components_reviews_sections';
  info: {
    displayName: 'reviews_section';
    description: '';
  };
  attributes: {
    header_title_line_1: Schema.Attribute.String & Schema.Attribute.Required;
    header_title_line_2: Schema.Attribute.String & Schema.Attribute.Required;
    header_description: Schema.Attribute.String & Schema.Attribute.Required;
    button_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"Let's talk">;
    button_url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://api.whatsapp.com/send/?phone=18324919670&text&type=phone_number&app_absent=0'>;
    reviews: Schema.Attribute.Component<'components.review-card', true>;
  };
}

export interface ComponentsReviewDetailCard extends Struct.ComponentSchema {
  collectionName: 'components_components_review_detail_cards';
  info: {
    displayName: 'review_detail_card';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    image_url: Schema.Attribute.String & Schema.Attribute.Required;
    review_text: Schema.Attribute.Text;
    position: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'CEO'>;
    logo_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsReviewCard extends Struct.ComponentSchema {
  collectionName: 'components_components_review_cards';
  info: {
    displayName: 'review_card';
    description: '';
  };
  attributes: {
    video_url: Schema.Attribute.String;
    image_url: Schema.Attribute.String;
    kpi: Schema.Attribute.Component<'components.kpi-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
    review: Schema.Attribute.Component<'components.review-detail-card', false> &
      Schema.Attribute.Required;
    override_image: Schema.Attribute.Component<
      'components.override-image',
      false
    >;
  };
}

export interface ComponentsPricingFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_pricing_features';
  info: {
    displayName: 'pricing_feature';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_components_pricing_cards';
  info: {
    displayName: 'pricing_card';
  };
  attributes: {
    type: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    price_description: Schema.Attribute.String & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'components.pricing-feature', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    button_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Talk to Sales'>;
  };
}

export interface ComponentsOverrideImage extends Struct.ComponentSchema {
  collectionName: 'components_components_override_images';
  info: {
    displayName: 'override_image';
    description: '';
  };
  attributes: {
    image_url: Schema.Attribute.String;
    mobile_url: Schema.Attribute.String;
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

export interface ComponentsKpiSection extends Struct.ComponentSchema {
  collectionName: 'components_components_kpi_sections';
  info: {
    displayName: 'kpi_section';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<' Supercharge Your Sales with Revolutionary AI Funnels'>;
    kpi: Schema.Attribute.Component<'components.kpi-card', true>;
  };
}

export interface ComponentsKpiCard extends Struct.ComponentSchema {
  collectionName: 'components_components_kpi_cards';
  info: {
    displayName: 'kpi_card';
  };
  attributes: {
    statistic: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    icon_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsHomePageBenefits extends Struct.ComponentSchema {
  collectionName: 'components_components_home_page_benefits';
  info: {
    displayName: 'home_page_benefits';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    benefits: Schema.Attribute.Component<'components.benefits', true> &
      Schema.Attribute.Required;
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
    header_image_url: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://assets.runday.us/new-hero.webp'>;
  };
}

export interface ComponentsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_cards';
  info: {
    displayName: 'feature_card';
    icon: 'discuss';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    tab_title: Schema.Attribute.String & Schema.Attribute.Required;
    button_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Talk to Sales'>;
    image_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsFeatureCardSection extends Struct.ComponentSchema {
  collectionName: 'components_components_feature_card_sections';
  info: {
    displayName: 'feature_card_section';
  };
  attributes: {
    header_title_line_1: Schema.Attribute.String & Schema.Attribute.Required;
    header_title_line_2: Schema.Attribute.String & Schema.Attribute.Required;
    header_description: Schema.Attribute.Text & Schema.Attribute.Required;
    tabs: Schema.Attribute.Component<'components.feature-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentsClientCard extends Struct.ComponentSchema {
  collectionName: 'components_components_client_cards';
  info: {
    displayName: 'client_card';
    description: '';
  };
  attributes: {
    image_url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://placehold.co/386x330.png'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    mobile_url: Schema.Attribute.String;
  };
}

export interface ComponentsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_components_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
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
      'components.reviews-section': ComponentsReviewsSection;
      'components.review-detail-card': ComponentsReviewDetailCard;
      'components.review-card': ComponentsReviewCard;
      'components.pricing-feature': ComponentsPricingFeature;
      'components.pricing-card': ComponentsPricingCard;
      'components.override-image': ComponentsOverrideImage;
      'components.logo-wall': ComponentsLogoWall;
      'components.logo-wall-item': ComponentsLogoWallItem;
      'components.kpi-section': ComponentsKpiSection;
      'components.kpi-card': ComponentsKpiCard;
      'components.home-page-benefits': ComponentsHomePageBenefits;
      'components.header-title-line-1': ComponentsHeaderTitleLine1;
      'components.feature-card': ComponentsFeatureCard;
      'components.feature-card-section': ComponentsFeatureCardSection;
      'components.client-card': ComponentsClientCard;
      'components.benefits': ComponentsBenefits;
      'components.about-page-cards': ComponentsAboutPageCards;
    }
  }
}
