class SubscribeAPI {
  constructor() {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  async postSubscribe(user) {
    const raw = JSON.stringify({
      email: user.email,
      name: user.name,
    });

    const requestOptions = {
      method: "POST",
      headers: this.headers,
      body: raw,
      redirect: "follow",
    };

    try {
      //aws 람다임
      const response = await fetch(
        "https://84l4s5m4ik.execute-api.ap-northeast-2.amazonaws.com/default/newso-subscribe",
        requestOptions
      ).then((response) => response.json());
      const subscribeResult = response.body.result;
      return subscribeResult;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addSubscriber(user) {
    const result = await this.postSubscribe(user);
    const { Ok, Value } = result;
    if (!Ok) {
      return "failUnknown";
    }
    const subscribeResults = Value;
    for (let subscribeResult in subscribeResults) {
      if (subscribeResults[subscribeResult].length !== 0) {
        return subscribeResult;
      }
    }
  }
}

const subscribeAPI = new SubscribeAPI();

export default subscribeAPI;
