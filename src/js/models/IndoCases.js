export default class IndoCases {
  async getIndoCard() {
    try {
      const response = await fetch(`https://covid19.mathdro.id/api/countries/indonesia`);
      const responseJson = await response.json();
      
      this.result = responseJson;
    } catch (error) {
      console.log(error);
    }
  }
}