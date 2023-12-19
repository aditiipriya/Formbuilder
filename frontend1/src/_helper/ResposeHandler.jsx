
/* This file handle response of all api.*/

//Response filter
function ResponseFilter(response) {
    console.log(response,"response...........")
    var serverResponseStatus = response.status;
    var serverResponseData = (typeof response.data != 'undefined') ? response.data : ((typeof response.error != 'undefined') ? response.error : null);
    console.log(serverResponseData.error,"####################################################error")
    if (serverResponseData.status === 0 && serverResponseData.error ) {
      window.location.href = '/';
    }
    return {
      serverResponseStatus,
      serverResponseData
    }
  }
  export {
    ResponseFilter
  }