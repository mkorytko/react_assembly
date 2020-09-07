import axios from "axios";

const {CancelToken} = axios;

function fetchData(method, {url, params = {}}) {
  return new Promise((resolve, reject) => {
    let body = {};
    if (method === "get") {
      body = {params};
    } else {
      body = {...params};
    }
    if (body.file) {
      // console.log(body.file.get("file"));
    }
    let cancel;
    const options = {
      method,
      // baseURL: `${window.location.origin}/api`,
      url,
      data: body,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };
    axios(options).then(({data}) => {
      resolve({data, cancel});
    }).catch((e) => reject(e));
  });
}

export async function getData(url, params) {
  try {
    return await fetchData("get", {url, params});
  } catch (e) {
    console.log("Get error...", e);
  }
}

export async function postData(url, params) {
  try {
    return await fetchData("post", {url, params});
  } catch (e) {
    console.log("Post error...", e);
  }
}

export function uploadData(url, body, uploadProgress, downloadProgress) {
  return new Promise((resolve, reject) => {
    let cancel;
    const options = {
      method: "POST",
      // baseURL: `${window.location.origin}/api`,
      url,
      data: body,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
      onUploadProgress: uploadProgress,
      onDownloadProgress: downloadProgress,
    };
    axios(options).then(({data}) => {
      resolve({data, cancel});
    }).catch((e) => reject(e));
  });
}
