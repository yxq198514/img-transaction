var fs = require('fs');

var filesList = [];
//�����ļ��У���ȡ�����ļ���������ļ���Ϣ
/*
 * @param path ·��
 *
 */

function scan(path)
{

    readFile(path,filesList);

    return { filesList : filesList};
}

//������ȡ�ļ�
function readFile(path,filesList) {
    files = fs.readdirSync(path);//��Ҫ�õ�ͬ����ȡ
    files.forEach(walk);
    function walk(file) {
        states = fs.statSync(path + '/' + file);
        if (states.isDirectory()) {
            readFile(path + '/' + file, filesList);
        }
        else {
            //����һ�����󱣴���Ϣ
            var obj = new Object();
            obj.size = states.size;//�ļ���С�����ֽ�Ϊ��λ
            obj.name = file;//�ļ���
            obj.path = path + '/' + file; //�ļ�����·��
            filesList.push(obj.path);

        }
    }


}




exports.scan = scan;
  