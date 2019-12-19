import { Stream } from "stream";
import { resolve } from "q";

class MediaHandler{
    getPermission(){
        return((res, rej) => {
            navigator.mediaDevices.getUserMedia({video: true, audio:true})
                .then((stream) => {
                    resolve(stream);
                })
                .catch(err => {
                    throw new Error(`Unable to fetch stream ${err}`);
                })
        });
    }
}