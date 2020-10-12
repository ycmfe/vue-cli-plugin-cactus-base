import axios from 'axios'
import { axiosInterceptors, getQueryObject } from '@guanghe-pub/onion-utils'

axiosInterceptors({
  axios,
  urlQuery: getQueryObject(),
  formatResponse: (res) => res.data,
})
