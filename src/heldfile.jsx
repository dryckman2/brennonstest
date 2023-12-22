import SSFile from "./ssfile.jsx";
import React from 'react'

class HeldFile {
    constructor(key, filename, file_contents) {
        this.key = key;
        this.filename = filename;
        this.file_contents = file_contents;
        this.preview = this.firstPreview(file_contents);
    }

    firstPreview(file_content) {
        let str = file_content.split("\n");
        let result = str[0];
        let i = 1;
        while ((i < str.length) && (result.length < 100)) {
            result += str[i];
            i++;
        }
        return result;
    }

    updatePreview(searchString) {
        if (!searchString || searchString.length === 0) { return this.firstPreview(this.file_contents) };
        console.log(searchString);
        if (searchString && this.file_contents.toLowerCase().includes(searchString.toLowerCase())) {
            let io = this.file_contents.toLowerCase().indexOf(searchString.toLowerCase());
            this.preview = this.file_contents.substring(io > 10 ? io - 10 : 0, Math.min(io + 50, this.file_contents.length));
        }
        return "Error";
    }

    toReact(filter) {
        this.updatePreview(filter);
        return <SSFile key={this.key} filename={this.filename} file_content={this.file_contents} preview={this.preview} />
    }
}

export default HeldFile;