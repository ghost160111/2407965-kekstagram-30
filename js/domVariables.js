const domVariables = {
  body: document.querySelector('body'),
  uploadImgInput: document.querySelector('.img-upload__input'),
  imgUploadOverlay: document.querySelector('.img-upload__overlay'),
  imgUploadPreview: document.querySelector('.img-upload__preview > img'),
  imgUploadPreviewContainer: document.querySelector('.img-upload__preview'),
  cancelImgPreviewBtn: document.querySelector('.img-upload__cancel'),
  scaleControlSmallerBtn: document.querySelector('.scale__control--smaller'),
  scaleControlBiggerBtn: document.querySelector('.scale__control--bigger'),
  scaleControlValue: document.querySelector('.scale__control--value'),
  effectsRadioBtns: document.querySelectorAll('.effects__radio'),
  effectLevelValueInput: document.querySelector('.effect-level__value'),
  effectLevelValueSlider: document.querySelector('.effect-level__slider'),
  imgUploadEffectLevelContainer: document.querySelector('.img-upload__effect-level'),
  form: document.querySelector('.img-upload__form'),
  formHashTags: document.querySelector('.text__hashtags'),
  formDescription: document.querySelector('.text__description'),
  imgFiltersBtn: document.querySelectorAll('.img-filters__button'),
  imgFilters: document.querySelector('.img-filters'),
  successTemplate: document.querySelector('.success-template'),
  failureTemplate: document.querySelector('.error-template'),
  picturesContainer: document.querySelector('.pictures'),
  pictures: document.querySelectorAll('.picture'),
  picturesImg: document.querySelectorAll('.picture__img'),
  pictureLikes: document.querySelectorAll('.picture__likes'),
  bigPictureOverlay: document.querySelector('.big-picture'),
  bigPicturePreview: document.querySelector('.big-picture__preview'),
  bigPictureCancelBtn: document.querySelector('.big-picture__cancel'),
  bigPictureImg: document.querySelector('.big-picture__img > img'),
  socialPicture: document.querySelector('.social__header > .social__picture'),
  socialCaption: document.querySelector('.social__caption'),
  likesCount: document.querySelector('.likes-count'),
  socialCommentShownCount: document.querySelector('.social__comment-shown-count'),
  socialCommentTotalCount: document.querySelector('.social__comment-total-count'),
  socialCommentsList: document.querySelector('.social__comments'),
  socialComment: document.querySelectorAll('.social__comment'),
  socialCommentAvatar: document.querySelectorAll('.social__comment > .social__picture'),
  socialCommentText: document.querySelectorAll('.social__comment > .social__text'),
  socialCommentsLoader: document.querySelector('.social__comments-loader') ?? document.querySelector('.comments-loader'),
  socialCurrentUserAvatar: document.querySelector('.social__footer > .social__picture'),
  socialCurrentUserComment: document.querySelector('.social__footer-text'),
  socialCurrentUserPostComment: document.querySelector('.social__footer-btn')
};

export default domVariables;
