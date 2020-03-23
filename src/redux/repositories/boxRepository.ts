import axios from 'axios'

const base = 'https://localhost:5001/api'

export default {
  async getBox() {
    return await axios.get(`${base}/box`)
  },
}
