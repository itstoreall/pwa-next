import { FormEvent, ReactNode } from 'react';

export type ChildrenProps = { children: ReactNode };

export type PreventDefaultArg = { preventDefault: () => void };

export type SubmitFormEvent = FormEvent<HTMLFormElement>;
