{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://...',
            data: 'byte-data'
        }
    }
    
    type VideoMetadata = Pick<Video, 'id'|'title'>

    // Pick을 이용해 id 와 title만 이용할 수 있음
    // function getVideoMetadata(id: string): Pick<Video, 'id' | 'title'> {
    //     return {
    //         id: id,
    //         title: 'title'
    //     }
    // }

    // Pick을 이용해 id 와 title만 이용할 수 있음
    function getVideoMetadata(id: string): VideoMetadata{
        return {
            id: id,
            title: 'title'
        }
    }




}