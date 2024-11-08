import { USER_ROLE } from '@/constant/role';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type TMeta = {
  limit: number;
  page: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  child?: DrawerItem[];
}

export type TResponseSuccessType = {
  data: any;
  meta?: TMeta;
};

export type TGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TGenericErrorMessage[];
};
