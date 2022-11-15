package be.wiselife.challenge.controller;

import be.wiselife.challenge.dto.ChallengeDto;
import be.wiselife.challenge.entity.Challenge;
import be.wiselife.challenge.mapper.ChallengeMapper;
import be.wiselife.challenge.service.ChallengeService;
import be.wiselife.dto.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/challenges")
@Validated
public class ChallengeController {
    private final ChallengeMapper challengeMapper;
    private final ChallengeService challengeService;

    public ChallengeController(ChallengeMapper challengeMapper, ChallengeService challengeService) {
        this.challengeMapper = challengeMapper;
        this.challengeService = challengeService;
    }

    @PostMapping()
    public ResponseEntity postChallenge(@Valid @RequestBody ChallengeDto.Post challengePostDto){
        Challenge challenge = challengeMapper.challengePostDtoToChallenge(challengePostDto);
        challenge =  challengeService.createChallenge(challenge);

        return new ResponseEntity<>(
                new SingleResponseDto<>(challengeMapper.challengeToChallengeResponseDto(challenge))
                , HttpStatus.CREATED);
    }
}
