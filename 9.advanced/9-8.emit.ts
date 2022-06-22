{
    type Video = {
        id: string
        title: string
        url: string
        data: string
    }

    type VideoMetaData = Omit<Video, 'id' | 'title'>

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'http://...',
            data: 'byte-data..'
        }
    }

    function getMetaData(id: string): VideoMetaData {
        return {
            url: 'https://...',
            data: 'byte-data...'
        }
    }
}
