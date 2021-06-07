import * as FileSystem from 'expo-file-system';
import { Image } from '../types';

const Downloader = {
  async downloadImages(images: Image[]): Promise<(FileSystem.FileSystemDownloadResult | undefined)[]> {
    const downloads = images.map(image => FileSystem.createDownloadResumable(image.URL,
      `${FileSystem.cacheDirectory}${image.id}.jpeg`));

    const urls = await Promise.all(downloads.map(download => download.downloadAsync()));
    return urls;
  },
};

export default Downloader;
