import axios from 'axios'

const base = 'https://slurpstockmanagement.azurewebsites.net/api'

export default {
  async getBox() {
    return await axios.get(`${base}/box`)
  },
}
