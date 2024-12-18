import { Injectable } from '@nestjs/common';
import axios from 'axios';

// 测试用，不要再生产时硬编码到代码中
const API_KEY = 'sk-7ca572acd89f47228771435077beac75';

@Injectable()
export class SfcCodegenService {
  async html2sfc(prompt: string): Promise<string> {
    const url = `https://dashscope.aliyuncs.com/api/v1/apps/cca36fc071e14784ba968263c72354da/completion`;
    const data = {
      input: { prompt },
      parameters: {},
      debug: {},
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        return response.data.output.text as string;
      } else {
        console.log(`request_id=${response.headers['request_id']}`);
        console.log(`code=${response.status}`);
        console.log(`message=${response.data.message}`);
        return '生成失败';
      }
    } catch (error) {
      console.error(`Error calling DashScope: ${error.message}`);
      if (error.response) {
        console.error(`Response status: ${error.response.status}`);
        console.error(
          `Response data: ${JSON.stringify(error.response.data, null, 2)}`,
        );
      }
      return '生成失败';
    }
  }

  async translator(prompt: string): Promise<string> {
    const url = `https://dashscope.aliyuncs.com/api/v1/apps/1949810e1ab24e70a028fbbc4c089f7c/completion`;
    const data = {
      input: { prompt },
      parameters: {},
      debug: {},
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        return response.data.output.text as string;
      } else {
        console.log(`request_id=${response.headers['request_id']}`);
        console.log(`code=${response.status}`);
        console.log(`message=${response.data.message}`);
        return '生成失败';
      }
    } catch (error) {
      console.error(`Error calling DashScope: ${error.message}`);
      if (error.response) {
        console.error(`Response status: ${error.response.status}`);
        console.error(
          `Response data: ${JSON.stringify(error.response.data, null, 2)}`,
        );
      }
      return '生成失败';
    }
  }
}
