// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.
import { Document } from '@contentful/rich-text-types';
import { Asset, Entry } from 'contentful';

export interface ICodeOfServicePageFields {
  /** Заголовок */
  title: string;

  /** Содержание */
  content: Document;
}

/** Страница */

export interface ICodeOfServicePage extends Entry<ICodeOfServicePageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'codeOfServicePage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IDmsPageFields {
  /** Заголовок */
  title: string;

  /** Содержание */
  content: Document;
}

/** Страница */

export interface IDmsPage extends Entry<IDmsPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'dmsPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFreeHelpPageFields {
  /** Заголовок */
  title: string;

  /** Содержание */
  content: Document;
}

/** Страница */

export interface IFreeHelpPage extends Entry<IFreeHelpPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'freeHelpPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IInspectionPageFields {
  /** Заголовок */
  title: string;

  /** Содержание */
  content: Document;
}

/** Страница */

export interface IInspectionPage extends Entry<IInspectionPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'inspectionPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IInternalServicePageFields {
  /** Заголовок */
  title: string;

  /** Содержание */
  content: Document;
}

/** Страница */

export interface IInternalServicePage extends Entry<IInternalServicePageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'internalServicePage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ILicensePageFields {
  /** Заголовок */
  title: string;

  /** Содержание */
  content: Document;

  /** Фотографии */
  images?: Asset[] | undefined;
}

/** Страница */

export interface ILicensePage extends Entry<ILicensePageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'licensePage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPaymentConditionsPageFields {
  /** Заголовок */
  title: string;

  /** Содержание */
  content: Document;
}

/** Страница */

export interface IPaymentConditionsPage extends Entry<IPaymentConditionsPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'paymentConditionsPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPricesPageFields {
  /** Заголовок */
  title: string;

  /** Прайс */
  pricelist: Document;
}

/** Страница */

export interface IPricesPage extends Entry<IPricesPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'pricesPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IWarrantyPageFields {
  /** Заголовок */
  title: string;

  /** Содержание */
  content: Document;
}

/** Страница */

export interface IWarrantyPage extends Entry<IWarrantyPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'warrantyPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | 'codeOfServicePage'
  | 'dmsPage'
  | 'freeHelpPage'
  | 'inspectionPage'
  | 'internalServicePage'
  | 'licensePage'
  | 'paymentConditionsPage'
  | 'pricesPage'
  | 'warrantyPage';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
