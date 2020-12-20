/**
 * @property id 유저 컴플레인 ID
 * @property description 컴플레인 내용
 * @property screenshot : 첨부된 스크린샷
 * @property screenshot - title : 스크린샷 제목
 * @property screenshot - desc : 스크린샷 내용
 * @property screenshot - file : 유첨 파일 경로
 */

export type ComplainType = {
    id: number;
    description: string;
    screenshot: { title: string; desc: string; file: string };
};
