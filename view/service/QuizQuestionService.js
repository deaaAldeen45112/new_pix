import { GenericService } from './GenericService.js'; // Adjust the file path accordingly
import * as en from "../common/env.js";
// Now you can use GenericService in your file

export class QuizQuestionService extends GenericService {
    static entity="QuizQuestion";
    static plural="QuizQuestions";



    static updateFlagByQuizQuestionId(quizQuestionId,flag) {
        return fetch(en.host + this.entity + `/UpdateFlagByQuizQuestionId?quizQuestionId=${quizQuestionId}&flag=${flag}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static updateNoteByQuizQuestionId(quizQuestionId,note) {
        return fetch(en.host + this.entity + `/UpdateNoteByQuizQuestionId?quizQuestionId=${quizQuestionId}&note=${note}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    static updateAnswerIdByQuizQuestionId(quizQuestionId,answerId) {
        return fetch(en.host + this.entity + `/UpdateAnswerIdByQuizQuestionId?quizQuestionId=${quizQuestionId}&answerId=${answerId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }
    UpdateAnswerIdAndCountByQuizQuestionId

    static updateAnswerIdAndCountByQuizQuestionId(quizQuestionId,answerId) {
        return fetch(en.host + this.entity + `/UpdateAnswerIdAndCountByQuizQuestionId?quizQuestionId=${quizQuestionId}&answerId=${answerId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static getCorrectAnswerByQuizQuestionId(quizQuestionId) {
        return fetch(en.host + this.entity + `/GetCorrectAnswerByQuizQuestionId?quizQuestionId=${quizQuestionId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static getQuizQuestionIdsByQuizId(quizId) {
        return fetch(en.host + this.entity + `/getQuizQuestionIdsByQuizId?quizId=${quizId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }


    static getQuizQuestionForShowingByQuizQuestionId(quizQuestionId) {
        return fetch(en.host + this.entity + `/GetQuizQuestionForShowingByQuizQuestionId?quizQuestionId=${quizQuestionId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    static getExpByQuizQuestionId(quizQuestionId) {
        return fetch(en.host + this.entity + `/GetExpByQuizQuestionId?quizQuestionId=${quizQuestionId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }

    


    static getIfAnswerdOnAllQuestions(quizId) {
        return fetch(en.host + this.entity + `/GetIfAnswerdOnAllQuestions?quizId=${quizId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => this.handleResponse(res));
    }



}