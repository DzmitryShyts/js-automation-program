const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    function printData(err, data) {
        if (err) {
            console.log("Error");
            return;
        }
            console.log(data);
    }
    callbackFunction(printData)
}


/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    promiseFunction().then((data) => {
        console.log(data);
    })
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    let data = await promiseFunction();
    console.log(data);
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function throwError(error) {
        throw error;
    }
    callbackFunctionError(throwError)
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    promiseFunctionError.catch((error) => {
        console.error(error);
    })
}

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    try {
        let result = await promiseFunctionError();
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
