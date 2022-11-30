import { useSetRecoilState } from 'recoil';

import * as S from '../../style/CreateChallenge/Challenge.styled';

import { createChallengeStateNumber } from '../../atoms/atoms';

export default function FirstQuestionSet({ register, watch }) {
  const setStatePageNumber = useSetRecoilState(createChallengeStateNumber);

  /**1번 페이지에서 입력할 모든 값을 입력시 페이지 이동 버튼 활성화 */
  const answerCheck = (event) => {
    const allValidateList = [
      'challengeCategoryId',
      'challengeMinParty',
      'challengeMaxParty',
      'challengeFeePerPerson',
    ];

    const validateList = allValidateList.filter(
      (element) => element !== event.target.name
    );

    event.target.value &&
    watch(validateList[0]) &&
    watch(validateList[1]) &&
    watch(validateList[2])
      ? setStatePageNumber(2)
      : setStatePageNumber(1);
  };

  return (
    <S.CreateAsk>
      <div className="question">
        <h3>카테고리를 선택하세요</h3>
        <div>
          <label>
            <input
              type={'radio'}
              {...register('challengeCategoryId', {
                required: 'Please Choice Quantity',
              })}
              onChange={(event) => answerCheck(event)}
              value={'1'}
            />
            버킷 리스트
          </label>
          <label>
            <input
              type={'radio'}
              {...register('challengeCategoryId', {
                required: 'Please Choice Quantity',
              })}
              onChange={(event) => answerCheck(event)}
              value={'2'}
            />
            공유 챌린지
          </label>
          <label>
            <input
              type={'radio'}
              {...register('challengeCategoryId', {
                required: 'Please Choice Quantity',
              })}
              onChange={(event) => answerCheck(event)}
              value={'3'}
            />
            오프라인 챌린지
          </label>
        </div>
      </div>
      <div className="question">
        <h3>함께할 최소인원수를 정해주세요</h3>
        <input
          className="inputBox"
          {...register('challengeMinParty', {
            required: 'Please Write Content',
          })}
          placeholder="최소 인원수를 입력하세요"
          onChange={(event) => answerCheck(event)}
          type={'number'}
        />
      </div>
      <div className="question">
        <h3>함께할 최대인원수를 정해주세요</h3>
        <input
          className="inputBox"
          {...register('challengeMaxParty', {
            required: 'Please Write Content',
          })}
          placeholder="최대 인원수를 입력하세요"
          onChange={(event) => answerCheck(event)}
          type={'number'}
        />
      </div>
      <div className="question">
        <h3>챌린지 참가금액을 입력해주세요</h3>
        <input
          className="inputBox"
          {...register('challengeFeePerPerson', {
            required: 'Please Write Content',
          })}
          placeholder="참가 금액"
          onChange={(event) => answerCheck(event)}
          type={'number'}
        />
      </div>
    </S.CreateAsk>
  );
}