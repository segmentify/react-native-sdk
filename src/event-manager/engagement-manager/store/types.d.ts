export type TInitialState = {
  campaign: {
    type: string;
    name: string;
    instanceId: string;
    status: string;
    devices: string[];
    startDate: number;
    note: string;
    timing: {
      type: string;
      param: string;
    };
    frequency: {
      type: string;
      param: string;
    };
    filters: {
      type: string;
      includedCategories: string[];
      excludedCategories: string[];
    }[];
    accountId: string;
    prioritized: boolean;
    title: string;

    image: string;
    bgColor: string;
    textColor: string;
    url: string;
    verticalPosition: string;
    html: string;
    css: string;
    preJs: string;
    postJs: string;
    sticky: string;
  };
};
