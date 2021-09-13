// pick과 반대로 원하는 타입을 제외하고 사용가능
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
    
    type VideoMetadata = Omit<Video, 'url' | 'data'>
    
    // Pick을 이용해 id 와 title만 이용할 수 있음
    function getVideoMetadata(id: string): VideoMetadata{
        return {
            id: id,
            title: 'title'
        }
    }




}