import { ChildrenProps } from '../../types/global';
import s from './Container.module.scss';

type ContainerProps = ChildrenProps & { label: string; status?: string };

const Container = ({ label, status, children }: ContainerProps) => (
  <div className={`${s.container} ${s[label]} ${s[status || '']}`}>
    {children}
  </div>
);

export default Container;
