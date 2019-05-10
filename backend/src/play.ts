import { Observable, Observer, of } from 'rxjs';
let obserber = Observable.create((observer) => {
    observer.next('1')
    observer.next('2')
    observer.next('3')

})
obserber.subscribe((data) => {
    console.log('Recived data ' + data)
})
of([80,8,9,25,63,4,2,5,7,8,52,5,4,5,25,65,5,5]).
