import axios from 'axios'

const base = 'https://slurpstockmanagement.azurewebsites.net/api'

export default {
  async getCoffee() {
    return await axios.get(`${base}/coffee`)
  },
}
