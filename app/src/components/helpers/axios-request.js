import axios from 'axios';

const defaultData = {
  method: 'GET',
  url: '',
  data: {},
  headers: {},
  params: {},
  timeout: 5000,
};

/**
 * Create an HTTP request with `axios`.
 *
 * @param {object} opts - configuration object.
 * @param {string} opts.method - HTTP method. default: GET.
 * @param {string} opts.url - server URL or endpoint.
 * @param {object} opts.data - data to be sent as the request body.
 * @param {object} opts.headers - custom headers to be sent to the server.
 * @param {number} opts.timeout - milliseconds before the request times out.
 *
 */
export const AxiosRequest = async (opts = defaultData, ...rest) => {
  try {
    const axiosInstance = axios.create({
      baseURL: 'https://starwarsapig4.herokuapp.com',
    });
    const { method, url, data, headers, timeout } = opts;
    const axiosresponse = await axiosInstance({
      method,
      url,
      data,
      headers,
      timeout,
    });
    if (axiosresponse.status !== 200) {
      return {
        ...axiosresponse,
        data: [],
        msg: 'Error with your request',
        status: axiosresponse.status || 404,
      };
    }
    return axiosresponse;
  } catch (error) {
    return {
      ...error,
      ...error.response.data,
      data: [],
      msg: 'Error with some of the data provided',
      status: error.response.status || 500,
    };
  }
};
