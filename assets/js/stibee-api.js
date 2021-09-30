class StibeeAPI {
  constructor() {
    this.headers = new Headers();
    const token = "";
    this.headers.append("AccessToken", token);
    this.headers.append("Content-Type", "application/json");
  }

  async addSubscriber(user) {
    const body = JSON.stringify({
      eventOccuredBy: "SUBSCRIBER",
      confirmEmailYN: "Y",
      subscribers: [
        {
          email: user.email,
          name: user.name,
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: this.headers,
      body: body,
      redirect: "follow",
    };

    const result = await fetch(
      "https://api.stibee.com/v1/lists/137513/subscribers",
      requestOptions
    );
    const jsonResult = result.json();
    return jsonResult;
  }
}

const stibeeAPI = new StibeeAPI();

export default stibeeAPI;
