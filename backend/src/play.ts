import { Observable, Observer, of } from 'rxjs';
let obserber = Observable.create((observer) => {
    observer.next('1')
    observer.next('2')
    observer.next('3')

})
obserber.subscribe((data) => {
    console.log('Recived data ' + data)
})

