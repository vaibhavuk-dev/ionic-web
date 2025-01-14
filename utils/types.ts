export type productDataType = {
    name: string;
    category: string;
    slug: string;
    tagline: string;
    description: string;
    applications: string[];
    features_and_benefits: string[];
    product_range: {
        range: string;
        customizable_based_on_client_needs: boolean;
        customized_options: string[];
    };
  } | undefined
  
  