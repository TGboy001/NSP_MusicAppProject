/**
 * api请求器
 */
import axios from './axios'

const api = {
  /**
   * 获取spotify音乐基本信息
   * @param {*} songUrl 音乐分享链接
   * @returns promise 请求对象
   */
  getSpotifySongInfo: (songUrl) => {
    return axios.get('https://open.spotify.com/oembed?url=' + songUrl)
  }
}

export default api
