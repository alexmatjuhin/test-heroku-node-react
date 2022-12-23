import fs from "fs";

const read = fs.constants.R_OK;
const write = fs.constants.W_OK;

const getDescription = (mode: number = fs.constants.R_OK) => {
    switch(mode) {
        case read | write:
            return "Read and Write";
        case read:
            return "Read";
        case write:
            return "Write";
    }
}

export const checkFileCanRead = (file: string) => checkFileExists(file, read);
export const checkFileCanWrite = (file: string) => checkFileExists(file, write);
export const checkFileCanReadAndWrite = (file: string) => checkFileExists(file, read | write);

export const checkFileExists = (file: string, mode: number): boolean  => {
    let flag: boolean = false;
    fs.access(file, mode, (err) => {
        if (err) {
            console.error(`No ${getDescription(mode)} access to file '${file}'.`);
        } else {
            console.log(`File '${file}' has ${getDescription(mode)} access.`);
            flag = true;
        }
    });
    return flag;
}
