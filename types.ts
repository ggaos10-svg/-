export interface Plan {
  term: string;
  price: number;
  note?: string;
  perSessionPrice?: number;
  isPopular?: boolean;
  discountedPrice?: number;
  discountedNote?: string;
  reviewDiscountPrice?: number;
  reviewDiscountNote?: string;
  benefits?: string[];
}

export interface PlanGroup {
  title: string;
  plans: Plan[];
}

export interface PtPlan {
  sessions: string;
  normalPrice: number;
  normalPerSession: number;
  premiumPrice: number;
  premiumPerSession: number;
  isPopular?: boolean;
}

export interface PricingCategory {
  title:string;
  icon: JSX.Element;
  description: string;
  plans?: Plan[];
  planGroups?: PlanGroup[];
  ptPlans?: PtPlan[];
}