type Video = {
    title: string;
    author: string
}

// [1,2].map(item => item * item) // [1, 4]
// map 함수와 동일한 역할을 함

type Optional<T> = {
    [P in keyof T]?: T[P] // for...in..
}

type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

type Read<T> = {
    readonly [P in keyof T]: T[P]
}

type VideoOptional = Optional<Video>
type VideoRD = ReadOnly<Video>

const videoOp: VideoOptional = {
    title: 'ironman',
    author: 'df'
    // year: 2003 // not assigned
}

const video2: VideoRD = {
    title: 'inception',
    author: 'nolan'
}

const video: VideoRD = {
    title: 'her',
    author: 'anonymous'
}

// video.title = 'no countries for the older' // readonly이므로 바꿀 수 없음

// type VideoOptional = {
//     title?: string;
//     author?: string
// }
//
// type VideoReadOnly = {
//     readonly title: string;
//     readonly author: string;
// }


{
    type Nullable<T> = {
        [P in keyof T]: T[P] | null
    }

    const obj2: Nullable<Video> = {
        title: 'her',
        author: null
    }
    
    type Proxy<T> = {
        get(): T;
        set(value:T): void
    }
    
    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>
    }
}
