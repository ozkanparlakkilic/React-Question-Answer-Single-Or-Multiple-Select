selectAnswer = async (index) => {
    const tempAnswers = this.state.answers;
    const oldSelectedAnswerIndex = tempAnswers.findIndex(
      (answer) => answer.isSelected
    );

    const selectionLimit = this.state.limit;
    const count = tempAnswers.filter((answer) => answer.isSelected).length;

    if (tempAnswers[index].isSelected) {
      tempAnswers[index].isSelected = false;

      await this.setState({
        answers: tempAnswers,
      });
      // await your remove function  
      return;
    }

    if (selectionLimit == 1) {
      if (oldSelectedAnswerIndex === -1) {
        tempAnswers[index].isSelected = true;
        await this.setState({ answers: tempAnswers });
          // await your add function 
        return;
      }
      tempAnswers[oldSelectedAnswerIndex].isSelected = false;
      tempAnswers[index].isSelected = true;
      await this.setState({ answers: tempAnswers });
      // await your add function
      // await your remove function
    }

    if (count < this.state.limit) {
      tempAnswers[index].isSelected = true;
      await this.setState({
        answers: tempAnswers,
      });
      // await your add function
    }
  };
