import { useCfgStore } from './endpoint/cfgStore';
import { useDictStore } from './endpoint/dictStore';
import { useLogStore } from './endpoint/logStore';
import { useNoticeStore } from './endpoint/noticeStore';

export const useMaintStore = () => ({
  cfg: useCfgStore(),
  dict: useDictStore(),
  log: useLogStore(),
  notice: useNoticeStore(),
});
