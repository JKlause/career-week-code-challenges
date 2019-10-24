a bunch of files are on a computer
each file has one word
reformat to look like 
${file_content}-${old_File_number}-${last_modified_datetime}


Need this first:
1. to get old file number... need to find a way to read the name of the file
fs.readdir(path) will give you a list of the files.


next: for each through these:
2. to get last modified datetime... need to find a way to get the last time it was modified
fs.statSync(filePathName).mtime

3. to get file content... use fs.readFile (need file path)

.then, make these into a file name, and fs.writeFile(newFilePath)