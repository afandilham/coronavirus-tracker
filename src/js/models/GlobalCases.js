export default class GlobalCases {
  async getGlobalCard() {
    try {
      const response = await fetch(`https://covid19.mathdro.id/api`);
      const responseJson = await response.json();
      
      this.result = responseJson;
    } catch (error) {
      console.log(error);
    }
  }

  async getGlobalCountries() {
    try {
      const response = await fetch(`https://covid19.mathdro.id/api/countries`);
      const responseJson = await response.json();
      
      this.countries = responseJson.countries;
    } catch(error) {
      console.log(error);
    }
  }
}