
/**  Navigator = 인터페이스는 사용자 웹 브라우저의 상태와 신원 정보를 나타내고 스크립트로 정보를 가져오거나 
 *   특정 활동(기능을) 등록할 때 사용
 *   https://developer.mozilla.org/en-US/docs/Web/API/Navigator/
*/

console.log(window.navigator);

/** app 정보 */
const appCodeName = navigator.appCodeName; // 권장하지 않는다. (삭제 될 수 있음)
const appName = navigator.appName; // 권장하지 않는다. (삭제 될 수 있음)
const appVersion = navigator.appVersion; // 권장하지 않는다. (삭제 될 수 있음)

/** bluetooth 
 * option { filters, optionalServices }
 * 16-bit service ID = 0x1802 and 0x1803
 * 128-bit UUID service c48e6067-5295-48d3-8d5c-0395f61792b1.
 * Devices 
 * 
*/

const bluetoothRequestDevices = async () => {

    /**
     * 
     * 브라우저 호환성 : https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice
     */
     let option = {
        filters: [
            {services: ['heart_rate']},
            {services: [0x1802, 0x1803]},
            {services: ['c48e6067-5295-48d3-8d5c-0395f61792b1']},
            {name: 'ExampleName'},
            {namePrefix: 'Prefix'}
        ],
        optionalServices: ['battery_service']
    }

    try {

      const request = await navigator.bluetooth.requestDevice(option)
      console.log('bluetoothRequest success :: ', request)

    } catch (e) {

        console.log('bluetoothRequest error :: ', e)
    }

} // bluetoothRequestDevices()

const bluetoothGetAvailability = async () => {

    /**
     * 사용(또는 접근)이 가능한 미디어 입력장치나 출력장치들의 리스트를 가져옵니다.
     * return value : []
     * 브라우저 호환성 : https://developer.mozilla.org/ko/docs/Web/API/MediaDevices/enumerateDevices#browser_compatibility_(%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80_%ED%98%B8%ED%99%98)
     */

    try {

      const request = await navigator.bluetooth.getAvailability()
      console.log('bluetoothGetAvailability success :: ', request)

    } catch (e) {

        console.log('bluetoothGetAvailability  error :: ', e)
    }

} // bluetoothGetAvailability();


document.querySelector('#bluetoothRequestDevices').addEventListener('click', e => bluetoothRequestDevices(e));
document.querySelector('#bluetoothGetAvailability').addEventListener('click', e => bluetoothGetAvailability(e));



/** clipboard 
 * 
 * 브라우저 호환성 : https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
*/

const clipboardRead = async () => {

    try {

      const request = await navigator.clipboard.read()
      console.log('clipboardRead success :: ', request)

    } catch (e) {

        console.log('clipboardRead  error :: ', e)
    }
}

const clipboardWrite = async () => {

    let canvas = document.querySelector('#clipboard-svg');
    console.log('여기', canvas)
    let data;
    canvas.toBlob((blob) => {
        data = [new ClipboardItem({ [blob.type]: blob })];
    })

    try {

      const request = await navigator.clipboard.write(data)
      console.log('clipboardwrite success :: ', request)

    } catch (e) {

        console.log('clipboardwrite  error :: ', e)
    }
}


const clipboardReadText = async () => {

    try {

      const request = await navigator.clipboard.readText()
      console.log('clipboardReadText success :: ', request)
      
      document.querySelector('#clipboard-text').innerHTML = request

    } catch (e) {

        console.log('clipboardReadText  error :: ', e)
    }
}


const clipboardWriteText = async () => {

    let text = document.querySelector('#clipboard-input').value;

    try {

      const request = await navigator.clipboard.writeText(text)
      console.log('clipboardwriteText success :: ', request)

    } catch (e) {

        console.log('clipboardwriteText  error :: ', e)
    }
}

document.querySelector('#clipboardRead').addEventListener('click', e => clipboardRead(e));
document.querySelector('#clipboardReadText').addEventListener('click', e => clipboardReadText(e));
document.querySelector('#clipboardWrite').addEventListener('click', e => clipboardWrite(e));
document.querySelector('#clipboardWriteText').addEventListener('click', e => clipboardWriteText(e));



/** Navigator credentials
 * 
 */


 const credentialsGet = async () => {


    try {

      const request = await navigator.credentials.get({password: true})
      console.log('credentials get success :: ', request)

    } catch (e) {

        console.log('credentials get  error :: ', e)
    }
}


const credentialsPreventSilentAccess = async () => {

    // 자동 로그인이 허용되는지 여부를 지정하는 플래그를 설정한 다음 빈 을 반환

    try {

      const request = await navigator.credentials.preventSilentAccess();
      console.log('credentials preventSilentAccess success :: ', request)

    } catch (e) {

        console.log('credentials preventSilentAccess  error :: ', e)
    }
}


const credentialsStore = async () => {

    // 자동 로그인이 허용되는지 여부를 지정하는 플래그를 설정한 다음 빈 을 반환

    try {

      const request = await navigator.credentials.store({
        id: "example-username",
        name: "John Doe",
        password: "correct horse battery staple"
      });
      
      console.log('credentials Store success :: ', request)

    } catch (e) {

        console.log('credentials Store  error :: ', e)
    }
}


credentialsStore();


/** hid 
 * 디바이스 장치 확인
 * 실험적인 단계 호환성이 안 좋음
 * 브라우저 호환성 : https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hid
*/


const hidgetDevices = async () => {

    console.log('hidgetDevices onconnect :: ', navigator.hid.onconnect);
    console.log('hid getDevices ondisconnect :: ', navigator.hid.ondisconnect);

    try {

      const request = await navigator.hid.getDevices()
      console.log('hid getDevices success :: ', request)

    } catch (e) {

        console.log('hid getDevices  error :: ', e)
    }
}

const hidrequestDevice = async () => {

    console.log('hid getDevices onconnect :: ', navigator.hid.onconnect);
    console.log('hid getDevices ondisconnect :: ', navigator.hid.ondisconnect);

    let option = {
        filters: [
            // {
            //   vendorId: 0xabcd,
            //   productId: 0x1234,
            //   usagePage: 0x0c,
            //   usage: 0x01,
            // },
          ],
    }

    try {

      const request = await navigator.hid.requestDevice(option)
      console.log('hid requestDevice success :: ', request)

    } catch (e) {

        console.log('hid requestDevice  error :: ', e)
    }
}


document.querySelector('#hidgetDevices').addEventListener('click', e => hidgetDevices(e));
document.querySelector('#hidrequestDevice').addEventListener('click', e => hidrequestDevice(e));


/** mediaCapabilities 
 * 디바이스 장치 확인
 * 실험적인 단계 호환성이 안 좋음
 * 브라우저 호환성 : https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaCapabilities
*/


const mediaCapabilities = async () => {

    console.log('hid mediaCapabilities onconnect :: ', navigator.hid.onconnect);
    console.log('hid mediaCapabilities ondisconnect :: ', navigator.hid.ondisconnect);

    let option = {
        type : 'file',
        audio : {
            contentType : "audio/mp3",
            channels : 2,
            bitrate : 132700,
            samplerate : 5200
        }
    }

    try {

      const request = await navigator.hid.requestDevice(option)
      console.log('hid requestDevice success :: ', request)

    } catch (e) {

        console.log('hid requestDevice  error :: ', e)
    }
}

/** mediaDevices 
 * 디바이스 장치 확인
 * 실험적인 단계 호환성이 안 좋음
 * 브라우저 호환성 : https://developer.mozilla.org/ko/docs/Web/API/MediaDevices
*/

const enumerateDevices = async () => {

    try {

        const request = await navigator.mediaDevices.enumerateDevices()
        console.log(' enumerateDevices success :: ', request)

    } catch (e) {

        console.log(' enumerateDevices  error :: ', e)
    }
}

const getDisplayMedia = async () => {

    try {

        const request = await navigator.mediaDevices.getDisplayMedia()
        console.log('get DisplayMedia success :: ', request)
  
    } catch (e) {

        console.log('get DisplayMedia  error :: ', e)
    }
}

const getSupportedConstraints = async () => {

    try {

        const request = await navigator.mediaDevices.getSupportedConstraints()
        console.log('get SupportedConstraints success :: ', request)
  
    } catch (e) {

        console.log('get SupportedConstraints  error :: ', e)
    }
}

const getUserMedia = async () => {

    try {

        const request = await navigator.mediaDevices.getUserMedia()
        console.log('get getUserMedia success :: ', request)
  
    } catch (e) {

        console.log('get getUserMedia  error :: ', e)
    }

}