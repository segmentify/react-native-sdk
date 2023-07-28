export type TFireBasePushResponse = {
  sentTime: number;
  data: {
    dataCenterUrl: string;
    instanceId: string;
    image: string;
    title: string;
    badge: string;
    sound: string;
    body: string;
    apiKey: string;
  };
  messageId: string;
  ttl: number;
  from: string;
};
