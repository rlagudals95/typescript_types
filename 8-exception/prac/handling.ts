{
     // Error(Exception) Handling: try -> catsh -> finally
     
    function readFile(fileName: string): string {
        if (fileName === 'empty') {
            throw new Error(`fill not exist ${fileName}`);
        }
        return 'file contents'
    }

    function closeFile(file: string) {
        console.log('close')
    }

    function run() { 

        const fileName = 'file';

        try {
            console.log(readFile(fileName));
        } catch (error) {
            console.log('catched');
        } finally { // 에러 유무와 상관없이 마지막에 실행
            closeFile(fileName)
        }
    }
    
    run();
    
}