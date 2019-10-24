a bunch of files are on a computer
each file has one word
reformat to look like 
${file_content}-${old_File_number}-${last_modified_datetime}

promisify all these actions:

1. to get file content... use fs.readFile (need file path)

2. to get old file number... need to find a way to read the name of the file

3. to get last modified datetime... need to find a way to get the last time it was modified

.then, make these into a file name, and fs.writeFile(newFilePath)