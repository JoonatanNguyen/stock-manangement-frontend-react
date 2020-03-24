import axios from 'axios'

const base = 'https://slurpstockmanagement.azurewebsites.net/api'

export default {
  async getOrderList() {
    return await axios.get(`${base}/orderList`)
  },
}
