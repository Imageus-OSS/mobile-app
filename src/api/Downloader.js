import * as FileSystem from 'expo-file-system';

const Downloader = {
  async downloadImages(images) {
    const downloads = images.map(image => FileSystem.createDownloadResumable(image.URL,
      `${FileSystem.cacheDirectory}${image.id}.jpeg`));

    const urls = await Promise.all(downloads.map(download => download.downloadAsync()));
    return urls;
  },
};

export default Downloader;
